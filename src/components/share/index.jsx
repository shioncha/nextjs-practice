"use client"
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, PocketShareButton, PocketIcon } from "react-share"
import { SiTwitter, SiFacebook, SiPocket } from "@icons-pack/react-simple-icons"
import { MisskeyShare } from "../misskey-share"
import styles from "./share.module.css"

export function ShareTree(props) {
    return (
        <div className={styles.buttons}>
            <TwitterShareButton url={props.url} title={props.title}>
                <SiTwitter color="default" size={24} />
                <TwitterIcon size={48} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={props.url} quote={props.title}>
                <FacebookIcon size={48} round={true} />
            </FacebookShareButton>
            <PocketShareButton url={props.url} title={props.title}>
                <PocketIcon size={48} round={true} />
            </PocketShareButton>
            <MisskeyShare url={props.url} title={props.title} />
        </div>
    )
}