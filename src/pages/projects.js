import { navigate } from 'gatsby';

const Projects = () => {
  if (typeof window !== 'undefined') {
    navigate('/projects/work/wings-suite');
  }
  return null;
};

export default Projects;
