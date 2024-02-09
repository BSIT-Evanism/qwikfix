import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import { Form } from "@builder.io/qwik-city";
import styles from "./header.module.css";
import { useAuthSession, useAuthSignin, useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {

  const handleSignIn = useAuthSignin();
  const handleSignOut = useAuthSignout();
  const session = useAuthSession();


  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
          <li>
            <h4>
              {session.value?.user?.email || "Not signed in"}
              {import.meta.env.PUBLIC_PRODUCTION !== undefined ? "" : " (Production)"}
              {import.meta.env.PUBLIC_DEVER === "http://localhost:5173" ? import.meta.env.PUBLIC_DEVER : " (Development)"}
            </h4>
          </li>
          {session.value?.user?.name === undefined ? (

            <li>
              <Form action={handleSignIn}>
                <input type="hidden" name="providerId" value="google" />
                <input type="hidden" name="options.callbackUrl" value="https://qwikfix.netlify.app" />
                <button>Sign In</button>
              </Form>
            </li>
          ) : (

            <li>
              <Form action={handleSignOut}>
                <input type="hidden" name="callbackUrl" value="/" />
                <button>Sign Out</button>
              </Form>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
});
