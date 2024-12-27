// 프로젝트가 하나도 없는 경우도 만들어주자
import styles from '../style/NoData.module.css';

function NoData({ dataName }) {
    return <p className={styles.noData}>{dataName}가 텅 비었습니다</p>;
}

NoData.defaultProps = {
    dataName: '데이터',
};
export default NoData;
