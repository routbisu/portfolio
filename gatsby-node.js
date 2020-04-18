const { projects, projectTypes, skills } = require('./static-data');

exports.createPages = async ({ actions: { createPage } }) => {
  projectTypes.forEach(projectType => {
    projects[projectType.type].forEach(projectDetails => {
      createPage({
        path: `/projects/${projectType.slug}/${projectDetails.slug}`,
        component: require.resolve(`./src/templates/project/project.js`),
        context: {
          projectDetails,
          projectType,
          projectTypes,
          projects
        }
      });
    });
  });
};
