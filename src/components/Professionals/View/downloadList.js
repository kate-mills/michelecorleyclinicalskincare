import React from 'react'

import styles from './downloadList.module.css'

const DownloadList = ({ data, className }) => {
  return (
    <div className={`${styles.download_list} ${className || 'primary'} `}>
      {data.map(({ id, data }) => {
        return (
          <div key={id} className={styles.download}>
            <h3 className={`${styles.download__name}`}>
              {data.name}
            </h3>
            <p className={styles.download__notes}>{data.notes}</p>
              {data.dateUpdated && (
                <div className={styles.date_info}>
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
              className={styles.download__btn}
              href={data.pdf.localFiles[0].publicURL}
              target="_blank"
              rel="noreferrer"
              download={data.name}
            >
              Download
            </a>
          </div>
        )
      })}
    </div>
  )
}
export default DownloadList
