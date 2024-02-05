import { $, component$, useTask$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { supabase } from "~/utils/supabase";

export default component$(() => {
  const handleAuth = $(async () => {
    const data = await supabase.auth.getSession();

    if (!data.data.session) {
      await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log("logged in");
    }
  });

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
            <button onClick$={() => handleAuth()}>Sign In</button>
          </li>
        </ul>
      </div>
    </header>
  );
});
