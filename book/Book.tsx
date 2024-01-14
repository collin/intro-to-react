import "./Book.css";
import { Link, useParams, Route, Routes } from "react-router-dom";
const labs = import.meta.glob("./labs/**/contents.mdx", { eager: true });
const sections = import.meta.glob("./labs/**/section-*.mdx", { eager: true });

const findLabModule = (path: string) => {
  const module = labs[`./labs/${path}/contents.mdx`];
  if (!module) {
    throw new Error(`Cannot find lab module for path ${path}`);
  }
  return module;
};

const Lab = () => {
  const params = useParams();
  const Lab = findLabModule(params.lab);
  return <Lab.default />;
};

const findSectionModule = (lab: string, section: string) => {
  const module = sections[`./labs/${lab}/${section}.mdx`];
  if (!module) {
    throw new Error(`Cannot find section module for path ${lab}/${section}`);
  }
  return module;
};

const Section = () => {
  const params = useParams();
  const Section = findSectionModule(params.lab, params.section);
  return <Section.default />;
};

export const Book = () => {
  return (
    <div id="book-layout">
      <ol id="table-of-contents">
        {Object.entries(labs).map(([path, module]) => {
          return (
            <li key={path}>
              <label>{module.title ?? "(title missing)"}</label>
              <ol>
                <li>
                  <Link to={`/lab/${path.split("/")[2]}`}>Introduction</Link>
                </li>
                {Object.entries(sections).map(([path, module]) => {
                  return (
                    <li key={path}>
                      <Link
                        to={`/lab/${path.split("/")[2]}/${path
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
