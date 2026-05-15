import { ExternalLink, Shield, Target, Award, Home } from 'lucide-react';
import { useState } from 'react';
import {
  SlideContainer,
  SlideHeader,
  SlideFooter,
} from './design-system';

// Screenshots for findings
import imgS1 from '@/imports/reactive_it.png';
import imgS2a from '@/imports/TeamViewer_Refreshing_Core12.png';
import imgS2b from '@/imports/teamv_11.png';
import imgS2c from '@/imports/team_10.png';
import imgS3a from '@/imports/team_inage_17.png';
import imgS3b from '@/imports/team_iang_16.png';
import imgS3c from '@/imports/team_data_15.png';
import imgS3d from '@/imports/team_18.png';

interface Reference {
  label: string;
  url: string;
}

interface Finding {
  id: string;
  icon: any;
  color: string;
  bgColor: string;
  title: string;
  competitor: string;
  pageUrl: string;
  pageUrlDisplay: string;
  summary: string;
  bullets: string[];
  references: Reference[];
  screenshot: string | string[];
}

const findings: Finding[] = [
  {
    id: 'trust-validation',
    icon: Shield,
    color: '#1D4ED8',
    bgColor: '#EFF6FF',
    title: 'TeamViewer Elevating AI as a Core Product Narrative',
    competitor: 'TeamViewer',
    pageUrl: 'https://www.teamviewer.com/en/platform/one/features/teamviewer-ai/',
    pageUrlDisplay: 'teamviewer.com/platform/one/features/teamviewer-ai',
    summary:
      'TeamViewer has introduced a dedicated page for its AI capabilities while also prominently featuring AI messaging on the homepage. This indicates a strategic shift to position AI as a core differentiator, with increased emphasis on automation, proactive support, and DEX-led workflows.',
    bullets: [
      'Dedicated AI capabilities page prominently featured on homepage.',
      'Strategic positioning of AI as a core product differentiator.',
      'Emphasis on automation, proactive support, and DEX-led workflows.',
    ],
    references: [
      {
        label: 'TeamViewer AI Features',
        url: 'https://www.teamviewer.com/en/platform/one/features/teamviewer-ai/',
      },
      {
        label: 'TeamViewer AI Add-ons',
        url: 'https://www.teamviewer.com/en/products/add-ons/ai/',
      },
      {
        label: 'TeamViewer Homepage',
        url: 'https://www.teamviewer.com/en/',
      },
    ],
    screenshot: imgS1,
  },
  {
    id: 'competitive-targeting',
    icon: Target,
    color: '#DC2626',
    bgColor: '#FEF2F2',
    title: 'TeamViewer Refreshing Core Pages with AI-Led Messaging',
    competitor: 'TeamViewer',
    pageUrl: 'https://www.teamviewer.com/en/solutions/use-cases/remote-access/',
    pageUrlDisplay: 'teamviewer.com/solutions/use-cases/remote-access',
    summary:
      'TeamViewer\'s core pages (Remote Access and Remote Support) show a clear messaging shift toward AI, automation, and workflow-driven use cases, indicating evolving product positioning. This aligns with growing search interest in AI-related terms such as "AI remote access" and "AI remote support," highlighting increasing market demand for AI-driven IT capabilities.',
    bullets: [
      'Core pages refreshed with AI-powered messaging and automation focus.',
      'Workflow-driven use cases highlighted across Remote Access and Remote Support.',
      'Aligns with growing search interest in AI-related terms like "AI remote access" and "AI remote support."',
    ],
    references: [
      {
        label: 'Remote Access Use Cases',
        url: 'https://www.teamviewer.com/en/solutions/use-cases/remote-access/',
      },
      {
        label: 'Remote Support Use Cases',
        url: 'https://www.teamviewer.com/en/products/remote/use-cases/remote-support/',
      },
    ],
    screenshot: [imgS2a, imgS2b, imgS2c],
  },
  {
    id: 'social-proof',
    icon: Award,
    color: '#059669',
    bgColor: '#ECFDF5',
    title: 'AI Security Emerging as a Key Differentiation Area',
    competitor: 'TeamViewer & BeyondTrust',
    pageUrl: 'https://www.teamviewer.com/en/products/add-ons/ai/security/',
    pageUrlDisplay: 'teamviewer.com/products/add-ons/ai/security',
    summary:
      'Both TeamViewer and BeyondTrust have introduced dedicated AI Security pages, highlighting capabilities around AI governance, security, and control of automated workflows. This reflects a broader industry shift toward securing AI-driven IT operations and autonomous systems, further supported by rising search interest in "AI security". BeyondTrust page is ranking for "AI security solutions" (2K search volume, KD 42)—indicating growing demand and competitive focus in this space.',
    bullets: [
      'Dedicated AI Security pages launched by both vendors.',
      'Focus on AI governance, security controls, and automated workflow protection.',
      'BeyondTrust ranking for "AI security solutions" (2K volume, KD 42) shows growing market demand.',
    ],
    references: [
      {
        label: 'TeamViewer AI Security',
        url: 'https://www.teamviewer.com/en/products/add-ons/ai/security/',
      },
      {
        label: 'BeyondTrust AI Security',
        url: 'https://www.beyondtrust.com/solutions/ai-security',
      },
    ],
    screenshot: [imgS3a, imgS3b, imgS3c, imgS3d],
  },
];

export function SlideCompetitiveFindings({ onNavigateHome }: { onNavigateHome?: () => void }) {
  const [selectedFinding, setSelectedFinding] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const active = findings[selectedFinding];

  return (
    <SlideContainer slideNumber={21} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Web Experience"
        subtitle="Strategic Observations from Competitor Websites"
      />

      <div className="flex-1 flex flex-col gap-3 pb-4 overflow-hidden">

        {/* ── Tab Row ── */}
        <div className="flex-shrink-0">
          {/* Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {findings.map((f, idx) => {
              const Icon = f.icon;
              const isSelected = selectedFinding === idx;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFinding(idx)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 transition-all duration-200 flex-shrink-0 ${
                    isSelected
                      ? 'border-red-500 bg-white shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: f.bgColor }}
                  >
                    <Icon className="w-4 h-4" style={{ color: f.color }} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-900 leading-tight">{f.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: f.color }}>{f.competitor}</p>
                  </div>
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 ml-1 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Content Panel ── */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col min-h-0">

          {/* Panel Header */}
          <div className="flex-shrink-0 flex items-center justify-between gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
            {(() => {
              const Icon = active.icon;
              return (
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: active.bgColor }}
                  >
                    <Icon className="w-4 h-4" style={{ color: active.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{active.title}</h3>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: active.color }}
                    >
                      {active.competitor}
                    </span>
                  </div>
                </div>
              );
            })()}
            <a
              href={active.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0 max-w-[40%] truncate"
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{active.pageUrlDisplay}</span>
            </a>
          </div>

          {/* Two-column body */}
          <div className="flex-1 flex overflow-hidden min-h-0">

            {/* Left — summary + bullets + references */}
            <div className="w-[40%] flex-shrink-0 flex flex-col px-5 py-4 border-r border-gray-100 overflow-y-auto gap-4">

              {/* Summary */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Overview</p>
                <p className="text-xs text-gray-600 leading-relaxed">{active.summary}</p>
              </div>

              {/* References */}
              {active.references.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">References</p>
                  <ul className="space-y-2">
                    {active.references.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: active.color }}
                        />
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors leading-relaxed"
                        >
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right — Screenshot */}
            <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
              {Array.isArray(active.screenshot) ? (
                <div className="space-y-4">
                  {active.screenshot.map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-zoom-in hover:shadow-md transition-shadow border border-gray-100"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${active.title} ${idx + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 text-center">Click to enlarge</p>
                </div>
              ) : (
                <>
                  <div
                    className="bg-white rounded-lg shadow-sm overflow-hidden cursor-zoom-in hover:shadow-md transition-shadow border border-gray-100"
                    onClick={() => setLightboxImage(active.screenshot)}
                  >
                    <img
                      src={active.screenshot}
                      alt={active.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">Click to enlarge</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <div className="max-w-7xl max-h-full overflow-auto">
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <SlideFooter />
    </SlideContainer>
  );
}
