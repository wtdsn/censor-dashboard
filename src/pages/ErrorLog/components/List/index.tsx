export default function ErrorList() {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>{
      arr.map((item, index) => {
        return (
          <div key={index}>Log ietm {item}
            <div>错误类型，<span>messagemessagemessagemessagemessage</span></div>
          </div>
        )
      })
    }</>
  )
}