import { useState } from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Info, Setting, Address, Wishlist, Orders } from "@/components/Account";
import { Separator } from "@/components/Shared";
import styles from "./account.module.scss";

export default function AccountPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [reload, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  if (!user) {
    router.push("/");
    return null;
  }

  const panes = [
    {
      menuItem: "Purchases",
      render: () => (
        <Tab.Pane attached={false}>
          <Orders />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Whishlist",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Address",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddress onReload={onReload} reload={reload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Setting" },
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
