import React from 'react';
import Styles from './RenderProfileDetails.module.scss';

const RenderProfileDetails = ({ user }) => (
  <div>
    <table className={Styles.Table}>
      <tbody>
        <tr className={Styles.Table__Tr}>
          <td className={Styles.Table__Td}>name:</td>
          <td className={Styles.Table__Td}>{user.name}</td>
        </tr>
        <tr className={Styles.Table__Tr}>
          <td className={Styles.Table__Td}>surname:</td>
          <td className={Styles.Table__Td}>{user.surname}</td>
        </tr>
        <tr className={Styles.Table__Tr}>
          { user.role === 'provider' || user.role === '1' ? null : (
            <>
              <td className={Styles.Table__Td}>customer name:</td>
              <td className={Styles.Table__Td}>{user.name_customer}</td>
            </>
          ) }
        </tr>
        <tr className={Styles.Table__Tr}>
          <td className={Styles.Table__Td}>role:</td>
          <td className={Styles.Table__Td}>{user.role}</td>
        </tr>
        <tr className={Styles.Table__Tr}>
          <td className={Styles.Table__Td}>email:</td>
          <td className={Styles.Table__Td}>{user.email}</td>
        </tr>
        <tr className={Styles.Table__Tr}>
          <td className={Styles.Table__Td}>phone:</td>
          <td className={Styles.Table__Td}>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RenderProfileDetails;
