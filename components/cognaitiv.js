
import Button from "./elements/Button";
import Link from 'next/link'
// import ChatWidget from './chatwidget'

export default function Cognaitiv() {
  const text = `
The Power of AI for Your Business and Life

Are you looking to revolutionize your customer interactions, streamline operations, and boost efficiency? 
Our AI agent development services are here to transform your business and enhance your daily life. 
We offer a comprehensive suite of solutions designed to meet the evolving needs of modern businesses and individuals alike.

Our Services

- Voice Agents: Engage your audience with intuitive voice assistants that provide seamless interactions, helping you connect with customers more effectively.
- Chatbots: Enhance customer support with intelligent chatbots that offer instant responses, personalized experiences, and around-the-clock assistance.
- Scheduling Solutions: Simplify appointment management with AI-driven scheduling tools that reduce no-shows and optimize your time.

Why Choose Us?

- Innovative Technology: Stay ahead of the competition with cutting-edge AI solutions tailored to your unique needs.
- Personalized Support: Our dedicated team ensures that every solution is crafted to enhance your brand's voice and values.
- Efficiency and Cost Savings: Automate routine tasks and focus on what matters most—growing your business and improving customer satisfaction.
- Scalability: Our flexible solutions adapt to your business's growth, ensuring you stay agile in a rapidly changing market.

Transform Your Business Today
By integrating our AI agent development services into your operations, you'll not only enhance customer 
experiences but also drive business growth and efficiency. Let us help you harness the power of AI to elevate your brand and 
simplify your life.

Contact Us Now: to discover how our innovative solutions can revolutionize your business and life.

`;
  return (
    <>
      <div className="text-white sm:text-2xl flex gap-2 items-center justify-center cursor-pointer">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 256 256"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
        </svg>
        <p style={{ fontSize: "30px", color: "white" }}>
          AI Agent Customer Service
        </p>
      </div>

      

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <div style={{ width: "100%", height: "auto" }}>
          <div>
            <h2>Automate Your Business.</h2>
          </div>
          <div>
            <h1>Reduce Costs.</h1>
          </div>
          <div>
            <h1>Increase Profit.</h1>
          </div>
          <div>
            <h2>Simple!</h2>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <img src="/assets/images/agent/3.png" alt="Image blog" />
      </div>
      <a href="https://welcome-ai-agent-cs.vercel.app">
        <Link href="https://welcome-ai-agent-cs.vercel.app"><Button/></Link>
      </a>
      <a href="https://pack-3000-agent.vercel.app/">
        <Link href="https://pack-3000-agent.vercel.app/"><Button/></Link>
      </a>

      <div style={{ marginTop: "40px", whiteSpace: "pre-wrap" }}>
        <pre
          style={{ fontSize: "18px", color: "white", fontFamily: "inherit" }}
        >
          {text}
        </pre>
      </div>
    </>
  );
}
