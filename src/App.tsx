import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Project } from "./ProjectData";
import { Refs } from "./types";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    {} as Project
  );
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar((prev) => !prev), []);

  const sidebarRef = useRef<HTMLDivElement>(null!);
  const hamburgerRef = useRef<HTMLButtonElement>(null!);
  const homeRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  const ref = useRef<Refs>({ aboutRef, projectsRef, contactRef, hamburgerRef });
  const refSidebar = useRef<Refs>({ homeRef, aboutRef, projectsRef, contactRef, sidebarRef })

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        showSidebar &&
        sidebarRef.current &&
        hamburgerRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, [showSidebar, toggleSidebar]);

  return (
    <div>
      <Navbar
        ref={ref}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setSelectedProject={setSelectedProject}
      />
      <Home ref={ref}/>
      <About ref={aboutRef} />
      <Projects
        ref={projectsRef}
        toggleSidebar={toggleSidebar}
        setSelectedProject={setSelectedProject}
      />
      <Contact ref={contactRef} />
      <Sidebar
        ref={refSidebar}
        isOpen={showSidebar}
        project={selectedProject}
      />
    </div>
  );
}

export default App;
