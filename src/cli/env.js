import { env } from 'node:process';

const RSS_ENV_PREFIX = 'RSS_';

const parseEnv = () => {
  console.log(
    Object.keys(env)
      .reduce((resultArr, key) => {
        if (!key.includes(RSS_ENV_PREFIX)) {
          return resultArr;
        }

        resultArr.push(`${key}=${env[key]}`);

        return resultArr;
      }, [])
      .join('; ')
  );
};

parseEnv();
