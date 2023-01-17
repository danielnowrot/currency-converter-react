export const Result = ({ result }) => (
    <span className="form__result--text">
        {result ? (
            <>
                {result.sourceAmount.toFixed(2)}{" "}PLN{" "}={" "}
                {result.targetAmount.toFixed(2)}{" "}{result.currency}
            </>
        ) :"Policz coś!" }
    </span>
);