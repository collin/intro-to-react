import "./Book.css";
import { Link, useParams, Route, Routes } from "react-router-dom";
const labs = import.meta.glob("./labs/**/contents.mdx", { eager: true });
const sections = import.meta.glob("./labs/**/section-*.mdx", { eager: true });

const findLabModule = (path: string) => {
  const module = labs[`./labs/${path}/contents.mdx`];
  return module;
};

const Lab = () => {
  const params = useParams();
  const Lab = findLabModule(params.lab);
  if (!Lab) {
    return <div>Lab not found</div>;
  }
  return <Lab.default />;
};

const findSectionModule = (lab: string, section: string) => {
  const module = sections[`./labs/${lab}/${section}.mdx`];
  return module;
};

const Section = () => {
  const params = useParams();
  const Section = findSectionModule(params.lab, params.section);
  if (!Section) {
    return <div>Section not found</div>;
  }
  return <Section.default />;
};

const findSectionsForLab = (lab: string) => {
  return Object.entries(sections)
    .filter(([path]) => path.startsWith(`./labs/${lab}/section-`))
    .map(([path, module]) => {
      return {
        path,
        module,
      };
    });
};

export const Book = () => {
  return (
    <div id="book-layout">
      <ol id="table-of-contents">
        {Object.entries(labs).map(([path, module]) => {
          const labName = path.split("/")[2];
          return (
            <li key={path}>
              <label>{module.title ?? "(title missing)"}</label>
              <ol>
                <li>
                  <Link to={`/lab/${labName}`}>Introduction</Link>
                </li>
                {findSectionsForLab(labName).map(({ path, module }) => {
                  return (
                    <li key={path}>
                      <Link
                        to={`/lab/${labName}/${path
                          .split("/")[3]
                          .replace(".mdx", "")}`}
                      >
                        {module.title ?? "(title missing)"}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>

      <div id="lesson-contents">
        <Routes>
          <Route path="/lab/:lab" element={<Lab />} />
          <Route path="/lab/:lab/:section" element={<Section />} />
        </Routes>
      </div>
    </div>
  );
};
