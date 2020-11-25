var gulp = require('gulp');
var emailTemplates = require('./gulp/email-templates');

// Look for the --production flag
gulp.task('email-templates', emailTemplates.defaultScript);
gulp.task('build-email-templates', emailTemplates.buildScript);