import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Info } from "@/components/Account";
import styles from "./account.module.scss";

export default function AccountPage() {
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
      menuItem: "Setting",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Setting...</p>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <BasicLayout isContainer relative>
      <Info />

      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes }
        classNames={styles.tabs}
      />
    </BasicLayout>
  );
}
