import { useCallback, useMemo, useState } from "react";

function Callback() {
    // useCallback
    // useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용합니다.
    // 이 Hooks을 사용하면 만들어 놨던 함수를 재사용할 수 있습니다.
    //useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고,
    // useCallback의 두 번째 파라미터에는 배열을 넣으면 됩니다.
    // 이 배열에는 어떤 값이 바뀌었을 때, 함수를 새로 생성해야 하는지 명시해야 합니다

    // onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때, 만들었던 함수를 계속해서 재사용하게 되며
    // onInsert처럼 배열 안에 number와 list를 넣게 되면, 인풋 내용이 바뀌거나 새로운 항목이 추가될 때
    // 새로 만들어진 함수를 사용하게 됩니다.
    const getAverage = (numbers: number[]) => {
        console.log("평균값을 계산 중입니다.");
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    };

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setNumber(event.target.value);
        },
        []
    );
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber(""); //
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="number" value={number} onChange={onChange} />{" "}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value: number, index: number) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
            <div>
                <b>평균값:</b> {/* {getAverage(list)} */}
                {avg}
            </div>
        </div>
    );
}

export default Callback;
