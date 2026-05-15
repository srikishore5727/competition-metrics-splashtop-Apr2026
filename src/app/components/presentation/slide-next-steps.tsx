import { FileEdit, PenTool, Shield, Target } from 'lucide-react';
import { SlideContainer, SlideHeader, SlideFooter } from './design-system';

export function SlideNextSteps({ onNavigateHome }: { onNavigateHome?: () => void }) {
  return (
    <SlideContainer slideNumber={23} onNavigateHome={onNavigateHome} source="">
      <SlideHeader
        title="Next Steps"
        subtitle="Recommended Actions"
      />

      <div className="flex-1 overflow-y-auto pb-4 space-y-5">
        {/* 1. Product page optimization */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <FileEdit className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Product page optimization</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              With competitors shifting toward AI-driven positioning, we should introduce AI-focused sections across core product and solution pages by leveraging existing capabilities such as:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="text-xs text-gray-700 leading-relaxed">
                <strong>AI-optimized performance (codec)</strong> for smoother, high-performance remote sessions
              </li>
              <li className="text-xs text-gray-700 leading-relaxed">
                <strong>Secure access for AI workflows (Secure Workspace)</strong>, enabling safe and controlled usage of enterprise AI tools
              </li>
            </ul>
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              This will help align our messaging with evolving market expectations while maintaining credible, capability-led positioning and reinforcing Splashtop's role as an enabler of AI-driven workflows.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Splashtop guides</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-600" />
                  <a
                    href="https://www.splashtop.com/press/splashtop-introduces-ai-optimized-codec-to-power-smoother-workflows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors leading-relaxed break-all"
                  >
                    splashtop.com/press/splashtop-introduces-ai-optimized-codec-to-power-smoother-workflows
                  </a>
                </li>
                <li className="flex items-start gap-2 text-xs">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-600" />
                  <a
                    href="https://www.splashtop.com/blog/ai-security-risks-how-zero-trust-is-making-a-difference"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors leading-relaxed break-all"
                  >
                    splashtop.com/blog/ai-security-risks-how-zero-trust-is-making-a-difference
                  </a>
                </li>
                <li className="flex items-start gap-2 text-xs">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-600" />
                  <a
                    href="https://www.splashtop.com/blog/enterprise-agentic-ai-deployments"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors leading-relaxed break-all"
                  >
                    splashtop.com/blog/enterprise-agentic-ai-deployments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. AI Security Positioning */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">AI Security Positioning</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              With competitors introducing dedicated AI Security pages, we should strengthen our positioning through a combination of:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              <li className="text-xs text-gray-700 leading-relaxed">
                Creating a <strong>dedicated AI Security solution page</strong> focused on securing AI workflows, governance, and access control
              </li>
              <li className="text-xs text-gray-700 leading-relaxed">
                Enhancing the <strong>Secure Workspace (SSW) product page</strong> with AI security messaging (e.g., secure access to enterprise AI tools, Zero Trust controls)
              </li>
              <li className="text-xs text-gray-700 leading-relaxed">
                <strong>Leveraging and optimizing existing blog content</strong> (e.g., AI security risks, enterprise AI access, agentic AI) by strengthening internal linking, updating messaging, and aligning it with product positioning
              </li>
            </ul>
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              This will position Splashtop as a secure enabler of AI-driven IT environments, aligning with emerging market demand.
            </p>
          </div>
        </div>

        {/* 3. Target High-Opportunity "Free" Keyword Segment */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Target High-Opportunity "Free" Keyword Segment</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              Splashtop should leverage high-volume "free" remote access keywords where competitors are ranking, but Splashtop has no visibility.
            </p>
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              This can be addressed by creating or optimizing dedicated pages and sections targeting "free" use cases, clearly highlighting free trials, freemium options, or entry-level capabilities to capture this demand.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-bold text-gray-700 uppercase tracking-wide">Keyword</th>
                    <th className="text-center py-2 px-3 font-bold text-gray-700 uppercase tracking-wide">MSV</th>
                    <th className="text-center py-2 px-3 font-bold text-gray-700 uppercase tracking-wide">KD</th>
                    <th className="text-center py-2 px-3 font-bold text-blue-600 uppercase tracking-wide">splashtop.com</th>
                    <th className="text-center py-2 px-3 font-bold text-purple-600 uppercase tracking-wide">teamviewer.com</th>
                    <th className="text-center py-2 px-3 font-bold text-green-600 uppercase tracking-wide">anydesk.com</th>
                    <th className="text-center py-2 px-3 font-bold text-orange-600 uppercase tracking-wide">logmein.com</th>
                    <th className="text-center py-2 px-3 font-bold text-red-600 uppercase tracking-wide">get.gotomypc.com</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 text-gray-700">remote desktop free</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900"><strong>590</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900"><strong>82</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-blue-600"><strong>0</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-600"><strong>2</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-green-600"><strong>3</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-orange-600"><strong>7</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-red-600"><strong>24</strong></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 text-gray-700">free remote access to computer</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900"><strong>320</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900"><strong>77</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-blue-600"><strong>0</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-600"><strong>1</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-green-600"><strong>8</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-orange-600"><strong>56</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-red-600"><strong>5</strong></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 px-3 text-gray-700">remote access software free</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900"><strong>210</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900"><strong>55</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-blue-600"><strong>0</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-600"><strong>1</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-green-600"><strong>4</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-orange-600"><strong>15</strong></td>
                    <td className="py-2.5 px-3 text-center font-semibold text-red-600"><strong>13</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideContainer>
  );
}
