import styles from "@/styles/SkeletonLoading.module.css"


const SkeletonLoading = () => {
    return (
      <div className={styles.skeletonloading}>
        <div className={styles.skeletonline}></div>
        <div className={styles.skeletonline}></div>
        
      </div>
    );
  };
  
  export default SkeletonLoading;