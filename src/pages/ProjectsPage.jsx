import React from 'react';
import ProjectsMain from '../components/projectsSection/ProjectsMain';
import HeroGradient from '../components/heroSection/HeroGradient';

const ProjectsPage = () => {
  return (
    <div className="pt-[120px]">
      <HeroGradient />
      <ProjectsMain />
    </div>
  );
};

export default ProjectsPage;
