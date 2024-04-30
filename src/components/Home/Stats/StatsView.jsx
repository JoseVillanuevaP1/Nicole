import { CounterItems } from './CounterItems';

const StatsView = () => {
    const counters = [
        { value: "2850", label: "Cosas me gustan de ti" },
        { value: "675", label: "Dias a tu lado" },
        { value: "300", label: "Momentos juntos" },
        { value: "1700", label: "Cosa que amo de ti" }
    ];

    return (
        <>
            <CounterItems counters={counters} />
        </>
    );
};

export default StatsView;
