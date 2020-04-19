const { projects, projectTypes, allSkills } = require('./static-data');

exports.createPages = async ({ actions: { createPage } }) => {
  // Generate project pages
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

  // Generate skills pages
  allSkills.forEach(skillType => {
    const { slug, label } = skillType;
    createPage({
      path: `/skills/${slug}`,
      component: require.resolve(`./src/templates/skills/skills.js`),
      context: { allSkills, slug, label }
    });
  });
};
