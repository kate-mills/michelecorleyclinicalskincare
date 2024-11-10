import React from 'react'

import styles from './downloadList.module.css'

const DownloadList = ({ data }) => {
  return (
    <div className={styles.downloadList}>
      {data.map(({ id, data }) => {
        return (
          <div key={id} className={styles.download}>
            <h3>{data.name}</h3>
            <p>{data.notes}</p>
              {data.dateUpdated && (
                <div className={styles.dateInfo}>
                  <div>
                  {data.isNew && (
                    <input
                      type="button"
                      value="NEW"
                      title="Show date"
                      className={`${styles.ibtn }`}
                      onClick={(e)=>{
                        if(e.target.value  === "NEW"){
                          e.target.value = data.dateUpdated
                          e.target.className = `${styles.ibtn}`
                          e.target.title = "Hide date"
                        } else{
                          e.target.value = "NEW"
                          e.target.className = `${styles.ibtn}`
                          e.target.title = "Show date"
                        }
                      }}
                    />
                  )}
                  {!data.isNew && (
                    <input
                      type="button"
                      value="UPDATED"
                      title="Show date"
                      className={styles.ibtn}
                      onClick={(e)=>{
                        if(e.target.value  === "UPDATED"){
                          e.target.value = data.dateUpdated
                          e.target.className = `${styles.ibtn}`
                          e.target.title="Hide date"
                        } else{
                          e.target.value = "UPDATED"
                          e.target.title="Show date"
                          e.target.className = `${styles.ibtn}`
                        }
                      }}
                    />
                  )}
                  </div>
                </div>
              )}
            <a
              className={'btn'}
              href={data?.pdf?.localFiles[0]?.publicURL}
              target="_blank"
              rel="noreferrer"
              download={data.name}
            >Download PDF</a>
          </div>
        )
      })}
    </div>
  )
}
export default DownloadList
