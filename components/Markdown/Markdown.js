import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.css';

const Markdown = ({ content }) => {
  return <ReactMarkdown className={styles.markdown}>{content}</ReactMarkdown>;
};

export default Markdown;
