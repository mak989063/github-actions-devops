const core = require('@actions/core');
const github = require('@actions/github');

try {

    core.debug('Debugging is enabled');
    core.warning('This is a warning message');
    core.error('This is an error message');

    const name = core.getInput('who_to_greet');
    console.log(`Hello ${name}!`);

    const time = new Date();
    core.setOutput('time', time.toTimeString());

    core.exportVariable("HELLO_TIME", time);

    core.startGroup('Logging github context ');
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();

} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}