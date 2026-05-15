import { FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import {
  SlideContainer,
  SlideHeader,
  SlideFooter,
} from './design-system';

interface ContentItem {
  category: string;
  title: string;
  url: string;
  date: string;
}

const teamviewerContent: ContentItem[] = [
  {
    category: 'IT NEWS',
    title: 'TeamViewer G2 Spring 2026 Report',
    url: 'https://www.teamviewer.com/en-in/insights/teamviewer-g2-spring-2026-report/',
    date: 'Mar 2026',
  },
  {
    category: 'DIGITAL WORKPLACE',
    title: 'TeamViewer Gartner DWS 2026',
    url: 'https://www.teamviewer.com/en-in/insights/teamviewer-gartner-dws-2026/',
    date: 'Mar 2026',
  },
  {
    category: 'AI SECURITY',
    title: 'Work in Progress: 10 Takeaways - Alex Wallner',
    url: 'https://www.teamviewer.com/en-in/insights/work-in-progress-10-takeaways-alex-wallner/',
    date: 'Mar 2026',
  },
  {
    category: 'PRODUCT UPDATE',
    title: 'Up to Speed with TeamViewer - April 2026',
    url: 'https://www.teamviewer.com/en-in/insights/up-to-speed-with-teamviewer-april-2026/',
    date: 'Mar 2026',
  },
  {
    category: 'IT OPERATIONS',
    title: 'How to Secure Remote Access Without Slowing Production',
    url: 'https://www.teamviewer.com/en-in/insights/how-to-secure-remote-access-without-slowing-production/',
    date: 'Mar 2026',
  },
  {
    category: 'DIGITAL WORKPLACE',
    title: 'Digital Workplace Maturity: Practical Roadmap',
    url: 'https://www.teamviewer.com/en-in/insights/digital-workplace-maturity-practical-roadmap/',
    date: 'Mar 2026',
  },
];

const beyondtrustContent: ContentItem[] = [
  {
    category: 'AI SECURITY',
    title: 'Machine Learning Identity Graph Anomaly Detection',
    url: 'https://www.beyondtrust.com/blog/entry/machine-learning-identity-graph-anomaly-detection',
    date: 'Mar 2026',
  },
  {
    category: 'EMPLOYEE EXPERIENCE',
    title: 'Salesforce Access Risk',
    url: 'https://www.beyondtrust.com/blog/entry/salesforce-access-risk',
    date: 'Mar 2026',
  },
  {
    category: 'AI SECURITY',
    title: 'Claude Control: Agentic C2 Computer Use Agent',
    url: 'https://www.beyondtrust.com/blog/entry/claude-control-agentic-c2-computer-use-agent',
    date: 'Mar 2026',
  },
  {
    category: 'PRODUCT UPDATE',
    title: 'Privileged Remote Access 26.1 Updates',
    url: 'https://www.beyondtrust.com/blog/entry/privileged-remote-access-26-1-updates',
    date: 'Mar 2026',
  },
  {
    category: 'AI SECURITY',
    title: 'Pathfinder AI MCP Server',
    url: 'https://www.beyondtrust.com/blog/entry/pathfinder-ai-mcp-server',
    date: 'Mar 2026',
  },
  {
    category: 'IT OPERATIONS',
    title: 'How to Detect Shadow AI Governance',
    url: 'https://www.beyondtrust.com/blog/entry/how-to-detect-shadow-ai-governance',
    date: 'Mar 2026',
  },
  {
    category: 'IT NEWS',
    title: 'EDUCAUSE Top 10 2026',
    url: 'https://www.beyondtrust.com/blog/entry/educause-top-10-2026',
    date: 'Mar 2026',
  },
  {
    category: 'PRODUCT UPDATE',
    title: 'Remote Support 26.1: Secure Service Desk Operations',
    url: 'https://www.beyondtrust.com/blog/entry/remote-support-26-1-secure-service-desk-operations',
    date: 'Mar 2026',
  },
  {
    category: 'AI SECURITY',
    title: 'Securing AI Workloads (Video)',
    url: 'https://www.beyondtrust.com/resources/videos/securing-ai-workloads',
    date: 'Mar 2026',
  },
  {
    category: 'PODCAST',
    title: 'Episode 99: Rob Black',
    url: 'https://www.beyondtrust.com/podcast/ep-99-rob-black',
    date: 'Mar 2026',
  },
];

export function SlideContentGap({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [activeTab, setActiveTab] = useState<'teamviewer' | 'beyondtrust'>('teamviewer');

  const currentContent = activeTab === 'teamviewer' ? teamviewerContent : beyondtrustContent;
  const contentCount = currentContent.length;

  return (
    <SlideContainer slideNumber={19} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Content Gap"
        subtitle=""
      />

      <div className="flex-1 flex flex-col gap-4 pb-4">
        {/* Tab Navigation */}
        <div className="flex items-start gap-2">
          <button
            onClick={() => setActiveTab('teamviewer')}
            className={`px-6 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
              activeTab === 'teamviewer'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            TeamViewer
          </button>
          <button
            onClick={() => setActiveTab('beyondtrust')}
            className={`px-6 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ${
              activeTab === 'beyondtrust'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            BeyondTrust
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 flex flex-col">
          {/* Header Section */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-gray-900">New Pages Added in Mar 2026</h3>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {contentCount} NEW PAGES
                </span>
              </div>
              <p className="text-sm text-gray-700">
                Recent content expansion focusing on IT operations, DEX compliance, employee experience, and AI security.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4">
              {currentContent.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">Published: {item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideContainer>
  );
}
