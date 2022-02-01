import * as core from '@actions/core';
import * as github from '@actions/github';
import {run} from './action';

const NOTION_TOKEN_KEY = 'notion-token';
const NOTION_DB_KEY = 'notion-db';

async function start() {
  try {
    const notionToken = core.getInput(NOTION_TOKEN_KEY);
    const notionDb = core.getInput(NOTION_DB_KEY);

    core.info(`context event: ${github.context.eventName}`);
    core.info(`context action: ${github.context.action}`);
    core.info(`payload action: ${github.context.payload.action}`);

    const options = {
      notion: {
        token: notionToken,
        databaseId: notionDb,
      },
      github: {
        payload: github.context.payload,
      },
    };

    await run(options);
  } catch (e: any) {
    if (e) {
      core.setFailed(e.message);
    }
  }
}

(async () => {
  await start();
})();
