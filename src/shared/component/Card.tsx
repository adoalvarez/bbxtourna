
interface CardProps {
	children: React.ReactNode;
	title?: string;
}

const Card = ({ children, title } : CardProps) => {
	return (
		<div className="card card-border bg-base-200 text-amber-50">
			<div className="card-body text-base-content">
				{title && <h1 className="card-title">{title}</h1>}
				{children}
			</div>
		</div>
	)
}

export default Card;