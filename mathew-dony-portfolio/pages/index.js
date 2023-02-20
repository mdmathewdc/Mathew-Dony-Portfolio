import Head from "next/head";
import Image from "next/image";
import { Hero, Resume, Technologies, Projects, Contact } from "../components";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Mathew Dony</title>
        <meta name="description" content="Portfolio of Mathew Dony" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:description" content="Portfolio of Mathew Dony" />
        <meta property="og:image" content="https://mathewdony.com/cover_image.png" />
      </Head>

      <Hero />
      <Resume />
      <Technologies />
      <Projects />
      <Contact />

      <footer>
        <p className="credits">&copy; Designed and built by Mathew Dony using Next.js</p>
      </footer>
    </Container>
<!-- Start of LiveChat (www.livechat.com) code -->
<script>
    window.__lc = window.__lc || {};
    window.__lc.license = 15089934;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
</script>
<noscript><a href="https://www.livechat.com/chat-with/15089934/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->

  );
};

const Container = styled.div`
  padding: 0 5vw;
  color: white;
  .credits {
    text-align: center;
    font-size: 0.6rem;
    color: #4f5a61;
  }

  @media (min-width: 768px) {
    padding: 0 15vw;
  }
`;

export default Home;
