import React from "react";
import {
  TransactionButton,
  TransactionDate,
  TransactionRecord,
  TransactionSymbolImg,
  TransactionTable,
  TransactionTitle,
  TransactionTr,
  TransactionWidgetContainer,
} from "./styles";

const TransactionWidget = () => {
  const Button = ({ type }) => {
    return <TransactionButton className={type}>{type}</TransactionButton>;
  };

  return (
    <TransactionWidgetContainer>
      <TransactionTitle>Trade Transactions</TransactionTitle>
      <TransactionTable>
        <thead>
          <TransactionTr>
            <th className="TransactionHr"></th>

            <th className="TransactionHr">Symbol</th>
            <TransactionDate>Date</TransactionDate>
            <th className="TransactionHr">Shares</th>
            <th className="TransactionHr">Price</th>
            <th className="TransactionHr">Status</th>
          </TransactionTr>
        </thead>
        <tbody>
          <TransactionTr>
            <TransactionRecord>
              <TransactionSymbolImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
                alt="Order"
              />
            </TransactionRecord>
            <td className="TransactionSymbol">AAPL</td>
            <TransactionDate>21/02/2022</TransactionDate>
            <td className="TransactionShare">1.9783</td>
            <td className="TransactionPrice">$173.23</td>
            <td className="TransactionStatus">
              <Button type="ordering" />
            </td>
          </TransactionTr>
          <TransactionTr>
            <td>
              <TransactionSymbolImg
                src="https://seeklogo.com/images/C/coca-cola-circle-logo-A9EBD3B00A-seeklogo.com.png"
                alt="Order"
              />
            </td>
            <td className="TransactionSymbol">KO</td>
            <TransactionDate>21/02/2022</TransactionDate>
            <td className="TransactionShare">5</td>
            <td className="TransactionPrice">$173.23</td>
            <td className="TransactionStatus">
              <Button type="Processing" />
            </td>
          </TransactionTr>
          <TransactionTr>
            <td>
              <TransactionSymbolImg
                src="https://amerivetsecurities.com/wp-content/uploads/2020/12/ETF-Trends.jpg"
                alt="Order"
              />
            </td>
            <td className="TransactionSymbol">SPY</td>
            <TransactionDate>21/02/2022</TransactionDate>
            <td className="TransactionShare">1.9783</td>
            <td className="TransactionPrice">$173.23</td>
            <td className="TransactionStatus">
              <Button type="Completed" />
            </td>
          </TransactionTr>
          <tr className="TransactionTr">
            <td>
              <TransactionSymbolImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
                alt="Order"
              />
            </td>
            <td className="TransactionSymbol">AAPL</td>
            <TransactionDate>21/02/2022</TransactionDate>
            <td className="TransactionShare">1.9783</td>
            <td className="TransactionPrice">$173.23</td>
            <td className="TransactionStatus">
              <Button type="Completed" />
            </td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionWidgetContainer>
  );
};

export default TransactionWidget;
