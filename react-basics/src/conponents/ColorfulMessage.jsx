export const ColorfulMessage = ({ color, children }) => { // 引数の方で分割代入
  // 分割代入
  // const { color, children } = props;
  const contentStyle = { 
    color, // color: color, は省略できる
    fontSize: "18px",
  };

  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};


