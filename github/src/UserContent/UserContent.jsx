import React from 'react';
import data from '../data';
import styles from './UserContent.module.css';
import { HiLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';
import { RiBuildingFill } from 'react-icons/ri';
import { useUserContext } from '../Context/UserContext';

export default function UserContent() {
  const { userInfo } = useUserContext();

  const { name, bio, avatar_url, login, created_at, public_repos, followers, following, company, blog, location, email } = userInfo;

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let date = new Date(created_at); 

  date = `Joined ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`

  return (
    <div className={styles.container}>
      { userInfo ? (
        <>
          <img src={avatar_url} className={styles.img} alt='avatar_img' />
          <div className={styles.userBox}>
            <div className={styles.userName}>
              <div className={styles.usertit}>
                <h1>{name}</h1>
                <a href={data.html_url} className={styles.userPage}>@{login}</a>
                <h3>{bio}</h3>
              </div>
              <p>{date}</p>
            </div>
            <div className={styles.accountInfo}>
              <div className={styles.box}>
                <p className={styles.tit}>repos</p>
                <p className={styles.num}>{public_repos}</p>
              </div>
              <div className={styles.box}>
                <p className={styles.tit}>followers</p>
                <p className={styles.num}>{followers}</p>
              </div>
              <div className={styles.box}>
                <p className={styles.tit}>followings</p>
                <p className={styles.num}>{following}</p>
              </div>
            </div>
            <div className={styles.userEtc}>
              <div>
                <div className={styles.detailBox}>
                  <HiLocationMarker className={styles.icon} /> 
                  <span className={styles.tit}>Location</span>
                  <span className={styles.infoTxt}>{location}</span>
                </div>
                <div className={styles.detailBox}>
                  <FiLink className={styles.icon} /> 
                  <span className={styles.tit}>Blog</span> 
                  <a href={`https://${blog}`} className={styles.infoTxt}>{blog}</a>
                </div>
              </div>
              <div>
                <div className={styles.detailBox}>
                  <HiOutlineMail className={styles.icon} />
                  <span className={styles.tit}>Email</span>
                  <span className={styles.infoTxt}>{email}</span>
                </div>
                <div className={styles.detailBox}>
                  <RiBuildingFill className={styles.icon} />
                  <span className={styles.tit}>Company</span> 
                  <span className={styles.infoTxt}>{company}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.notFound}>검색 결과가 없습니다.</div>
        </>
      )}
    </div>
  );
}

