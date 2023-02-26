import * as React from "react";

import {
  Menu,
  useGetResourceLabel,
  useResourceContext,
  useResourceDefinitions,
} from "react-admin";

import LabelIcon from "@mui/icons-material/Label";
import { createElement } from "react";
import { useMediaQuery } from "@mui/material";

export const MyMenu = () => {
  const resources = useResourceDefinitions();

  return (
    <aside>
      {/* <header>
        <div>
          <img
            className="profile-picture"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_10.png"
          />
          <p>Jane Doe</p>
        </div>
      </header> */}
      <nav className="side-navigation">
        <ul>
          {Object.keys(resources).map((name) => {
            const Icon = resources[name].icon;
            return (
              <li className="lbl-li">
                <a className="" href={`/#/${name}`}>
                  {resources[name].icon && <Icon width={10} height={20} />}
                  <span title={name} className="lbl-text">
                    {(resources[name].options &&
                      resources[name].options.label) ||
                      name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>

    // <nav className="navigation">
    //   <ul className="menu">
    // {Object.keys(resources).map((name) => (
    //   <li>
    //     <a className="active" href={`/${name}`}>
    //       {resources[name].icon && createElement(resources[name].icon)}
    //       <span title={name}>
    //         {(resources[name].options && resources[name].options.label) ||
    //           name}
    //       </span>
    //     </a>
    //   </li>
    // ))}
    //   </ul>
    // </nav>
    // <Menu>
    //   {Object.keys(resources).map((name) => (
    //     <Menu.Item
    //       key={name}
    //       to={`/${name}`}
    //       primaryText={
    //         (resources[name].options && resources[name].options.label) || name
    //       }
    //       leftIcon={createElement(resources[name].icon)}
    //     />
    //   ))}
    //   <Menu.Item
    //     to="/custom-route"
    //     primaryText="Miscellaneous"
    //     leftIcon={<LabelIcon />}
    //   />
    // </Menu>
  );
};
