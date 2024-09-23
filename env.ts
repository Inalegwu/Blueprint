import dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

const Env = cleanEnv(process.env, {
  SOME_VALUE: str({
    desc: "some value",
  }),
});

export default Env;
