import { ClockComponents } from './styled';
import { useCurrentDate } from '../useCurrentDate';

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockComponents>
            Dzisiaj jest
            {" "}
            {date.toLocaleDateString(undefined, { month: "long", weekday: "long", day: "numeric" })}
            {", "}
            {date.toLocaleTimeString()}
        </ClockComponents>
    );
}
