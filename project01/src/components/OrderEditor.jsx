import { useState, useRef } from "react";

const OrderEditor = () => {
  const [input, setInput] = useState({
    menu: "", //메뉴
    address: "", //주소
    request: "", //요청사항
  });

  const inputRef = useRef();

  const onCahnge = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.address === "") {
      inputRef.current.focus();
      return;
    }
    alert(
      `주문이 완료되었습니다\n - 메뉴 : ${input.menu}\n - 주소 : ${input.address}\n - 요청사항 : ${input.request}`
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          name="menu"
          onChange={onCahnge}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          style={{ width: 300, padding: 5 }}
          ref={inputRef}
          name="address"
          placeholder="주소) 서울특별시 xx동 .."
          onChange={onCahnge}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5 }}
          name="request"
          placeholder="배달 요청사항을 써 주세요..."
          onChange={onCahnge}
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
