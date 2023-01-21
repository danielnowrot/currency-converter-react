import { ResultText } from "../Form/styled";

export const Result = ({ result }) => (
    <ResultText>
        {result ? (
            <>
                {result.sourceAmount.toFixed(2)}{" "}PLN{" "}={" "}
                {result.targetAmount.toFixed(2)}{" "}{result.currency}
            </>
        ) :"Policz coś!" }
    </ResultText>
);