const express = require('express');
const app = express();
const { getCurrentUTC, getCurrentDay } = require('./date');

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;


    if(!slack_name || !track){
        return res.status(400).json({error: 'Both parameters are required'})
    }
    res.status(200);
    const statusCode = res.statusCode;

    const result = {
        slack_name: slack_name,
        current_day: getCurrentDay(),
        utc_time: getCurrentUTC(),
        track: track,
        github_file_url: "https://github.com/SoftwareSultanDavid/zuriboard_backend_stage_one.git",
        github_repo_url: "https://github.com/SoftwareSultanDavid/zuriboard_backend_stage_one",
        status_code: statusCode
    }

    res.json(result);

})


module.exports = app;
