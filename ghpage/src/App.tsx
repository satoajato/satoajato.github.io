import "./App.css";
import imageToAdd from "./assets/images/minhafoto.jpg";

import {
  ObjectPage,
  Bar,
  Button,
  FlexBox,
  Link,
  Toolbar,
  Label,
  Breadcrumbs,
  MessageStrip,
  ObjectStatus,
  Form,
  Text,
} from "@ui5/webcomponents-react";
import {
  ObjectPageTitle,
  ObjectPageHeader,
  ObjectPageSection,
  ObjectPageSubSection,
} from "@ui5/webcomponents-react";
import { ToolbarButton } from "@ui5/webcomponents-react";
import { BreadcrumbsItem } from "@ui5/webcomponents-react";
import { FormGroup, FormItem } from "@ui5/webcomponents-react";

function App() {
  return (
    <ObjectPage
      headerArea={
        <ObjectPageHeader>
          <FlexBox alignItems="Center" wrap="Wrap">
            <FlexBox direction="Column">
              <Link href="https://www.linkedin.com/in/lucas-yo-sato/">
                LinkedIn
              </Link>
              <Link href="mailto:syoheidev@gmail.com">
                syoheidev@gmail.com
              </Link>
              <Link href="https://github.com/satoajato">
                https://github.com/satoajato
              </Link>
            </FlexBox>
            <FlexBox direction="Column" style={{ padding: "10px" }}>
              <Label>Arapongas</Label>
              <Label>PR, Brazil</Label>
            </FlexBox>
          </FlexBox>
        </ObjectPageHeader>
      }
      image={imageToAdd}
      imageShapeCircle
      mode="Default"
      onBeforeNavigate={function ks() { }}
      onPinButtonToggle={function ks() { }}
      onSelectedSectionChange={function ks() { }}
      onToggleHeaderArea={function ks() { }}
      selectedSectionId="goals"
      titleArea={
        <ObjectPageTitle
          breadcrumbs={
            <Breadcrumbs>
              <BreadcrumbsItem>satoajato.github.io</BreadcrumbsItem>
              <BreadcrumbsItem>Meu Portfólio</BreadcrumbsItem>
            </Breadcrumbs>
          }
          header="Lucas Y. O. Sato"
          subHeader="Consultor SAP"
        >
        </ObjectPageTitle>
      }
    >
      <ObjectPageSection aria-label="Goals" id="goals" titleText="Objetivos">
        <Form labelSpan="S12 M12 L12 XL12" layout="S1 M2 L3 XL3">
          <FormItem
            labelContent={
              <Label showColon>
                Estudar Fiori, CAP e RAP
              </Label>
            }
          >
            <Text>Em andamento</Text>
          </FormItem>
          <FormItem
            labelContent={
              <Label showColon>
                Começar MBA em Engenharia de Software
              </Label>
            }
          >
            <Text>Pendência</Text>
          </FormItem>
        </Form>
      </ObjectPageSection>
    </ObjectPage>
  );
}

export default App;
