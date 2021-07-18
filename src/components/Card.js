export const Card = ({ product, handleClick }) => {
  const { title, description, src } = product

  return (
    <div style={{ margin: 10, padding: 10, width: 300, border: '1px solid #333' }}>
      <img src={src} alt={title} style={{ height: 250, width: '100%' }} />
      <h3>{title}</h3>
      <p>{description}</p>

      <input
        type='button'
        name={title}
        value='Купить'
        style={{ height: 40, width: 120, marginTop: 30 }}
        onClick={() => handleClick(title)}
      />
    </div>
  )
}
