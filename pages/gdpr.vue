<script setup>
import MarkdownIt from "markdown-it"
const title= 'General Data Protection Regulation - Botalys'
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})
const content = `

# Privacy Policy for BOTALYS

At Botalys.com, accessible from https://botalys.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Botalys.com and how we use it.

## General Data Protection Regulation (GDPR)

We are a Data Controller of your information.

BOTALYS legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:

- BOTALYS needs to perform a contract with you
- You have given BOTALYS permission to do so
- Processing your personal information is in BOTALYS legitimate interests
- BOTALYS needs to comply with the law

BOTALYS will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.

In certain circumstances, you have the following data protection rights:

- The right to access, update or to delete the information we have on you.
- The right of rectification.
- The right to object.
- The right of restriction.
- The right to data portability
- The right to withdraw consent

## Log Files

Botalys.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.

## Cookies and Web Beacons

Like any other website, Botalys.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.

## Privacy Policies

You may consult this list to find the Privacy Policy for each of the advertising partners of Botalys.com.
Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Botalys.com, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.

## Children's Information

Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
Botalys.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.

## Online Privacy Policy Only

Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Botalys.com. This policy is not applicable to any information collected offline or via channels other than this website.

## Consent

By using our website, you hereby consent to our Privacy Policy and agree to its terms.
`
const md = new MarkdownIt()
const parsedContent = md.render(content)
</script>

<template>
    <div class="gdpr__parent">
        <section class="gdpr" >
            <span class="gdpr__tag description">General Data Protection Regulation</span>
            <article class="markdown" v-html="parsedContent">

            </article>
        </section>
    </div>
</template>

<style>
    .gdpr__parent{
        padding: 0 4px;
    }
    .gdpr{
        max-width: 1296px;
        width: 100%;
        margin: 0 auto;
        border-left: 2px solid var(--nandor);
        border-right: 2px solid var(--nandor);
        padding-top: 120px;
        padding-bottom: 120px;
    }
    .gdpr .markdown{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap:1rem;
    }
    .gdpr .markdown h1 {
            text-align: center;
            width: 100%;
    }
    .gdpr .markdown > *:not(h1){
        max-width: 622px;
        margin: 0 auto;
        width: 100%;
    }
    .gdpr__tag{
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--dark-jungle-green);
        margin: 0 auto;
        display: block;
        max-width: 224px;
    }
    @media (max-width:809px) {
        .gdpr{
            padding: 40px 1rem;
        }
    }
</style>