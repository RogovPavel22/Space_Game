import clsx from 'clsx';
import styles from './style.module.scss';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  className
}) => (
	<div className={clsx(className, styles.text)}>
		{children}
	</div>
);