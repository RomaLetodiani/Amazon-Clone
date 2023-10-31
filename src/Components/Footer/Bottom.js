import React from 'react';
import { FooterBottomLis } from '../Consts';

const Bottom = () => {
  return (
    <div className="bg-[#131921] hidden min-[900px]:block py-10">
      <table className="max-w-5xl w-full m-auto border-spacing-8 border-separate">
        <tbody>
          {FooterBottomLis.map((item, index) => (
            <tr key={index}>
              {item.map((t, index) => (
                <td className="text-sm align-top" key={index}>
                  <h3>{t.title}</h3>
                  <p className="text-[#999]">{t.text}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bottom;
