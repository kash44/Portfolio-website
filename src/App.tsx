import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import { useState, useRef, useEffect, useCallback } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Project } from "./ProjectData";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    {} as Project
  );
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar((prev) => !prev), []);

  const sidebarRef = useRef<HTMLDivElement>(null!);
  const hamburgerRef = useRef<HTMLButtonElement>(null!);

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
        ref={hamburgerRef}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        setSelectedProject={setSelectedProject}
      />
      <Home />
      <About />
      <Projects
        toggleSidebar={toggleSidebar}
        setSelectedProject={setSelectedProject}
      />
      <Contact />

      <Sidebar
        ref={sidebarRef}
        isOpen={showSidebar}
        project={selectedProject}
      />
    </div>
  );
}

export default App;
