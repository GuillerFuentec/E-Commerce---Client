import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Info, Setting } from "@/components/Account";
import { Separator } from "@/components/Shared";
import styles from "./account.module.scss";

export default function AccountPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const panes = [
    {
      menuItem: "Purchases",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Purchases...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Whishlist",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Whishlist...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Address",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Addresess...</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: {key: 20, icon: "settings", content: "Setting" },
      render: () => (
        <Tab.Pane attached={false}>
          <Setting.ChangeNameForm />
          <div className={styles.containerForm}>
            <Setting.ChangeEmailForm />
            <Setting.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <BasicLayout isContainer relative>
      <Info />

      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        className={styles.tabs}
      />
    </BasicLayout>
  );
}
