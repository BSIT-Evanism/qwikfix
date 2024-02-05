import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signIn = useAuthSignin();
  const signOut = useAuthSignout();

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
          {session.value?.user?.name !== undefined && (
            <h3>{session.value.user.email}</h3>
          )}
          {session.value?.user?.name === undefined ? (
            <li>
              <button
                onClick$={() =>
                  signIn.submit({
                    providerId: "google",
                    options: { callbackUrl: "/" },
                  })
                }
              >
                Sign In
              </button>
            </li>
          ) : (
            <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
              Sign Out
            </button>
          )}
        </ul>
      </div>
    </header>
  );
});
