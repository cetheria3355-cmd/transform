import { useState, FC, ReactNode } from 'react';
import type { NextPage } from 'next';
import { FileText, ChevronDown, Building, ShieldCheck, Star, Award, Download, CheckCircle, Clock } from 'lucide-react';

// --- TYPESCRIPT INTERFACES ---
type ChecklistItem = {
  name: string;
  description: string;
  source: '通用模板' | '企业提供' | '咨询机构协助';
};

type Certification = {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  description: string;
  icon: ReactNode;
  checklist: ChecklistItem[];
};

type RoadmapPhase = {
  phase: number;
  title: string;
  description: string;
  certifications: Certification[];
  badge: string;
  badgeColor: string;
};

// --- DATA MOCK ---
const roadmapData: RoadmapPhase[] = [
  {
    phase: 1,
    title: '第一阶段：基础建设与体系搭建',
    description: '为后续所有资质申报奠定坚实基础，重点是建立规范的管理体系和启动知识产权积累。',
    badge: '基础奠定',
    badgeColor: 'bg-blue-100 text-blue-800',
    certifications: [
      {
        id: 'p1c1',
        title: '知识产权 (IP) 规划与申请',
        subtitle: '一切高新资质的“入场券”',
        timeline: '第1-6个月',
        icon: <FileText className="w-5 h-5 text-blue-600" />,
        description: '启动软件著作权、实用新型专利的申请，为“科技型中小企业”和“高新技术企业”积累量化指标。',
        checklist: [
          { name: '技术交底书模板', description: '用于研发人员清晰描述技术创新点', source: '通用模板' },
          { name: '公司营业执照扫描件', description: '申请主体证明', source: '企业提供' },
          { name: '研发人员身份证明', description: '发明人/设计人信息', source: '企业提供' },
          { name: '软件源代码（前30页和后30页）', description: '软件著作权申请核心材料', source: '企业提供' },
          { name: '产品/技术结构图、流程图', description: '实用新型专利申请核心材料', source: '企业提供' },
        ],
      },
      {
        id: 'p1c2',
        title: 'ISO 9001 质量管理体系认证',
        subtitle: '提升管理水平与客户信任度',
        timeline: '第4-9个月',
        icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
        description: '规范企业生产和管理流程，是许多大型项目招投标和市场准入的基本要求。',
        checklist: [
          { name: '质量手册', description: '公司质量管理的纲领性文件', source: '咨询机构协助' },
          { name: '程序文件清单', description: '覆盖所有核心流程的SOP', source: '咨询机构协助' },
          { name: '管理评审会议纪要', description: '证明管理层对体系的参与和承诺', source: '企业提供' },
          { name: '内部审核记录全套', description: '体系自我检查和改进的证据', source: '企业提供' },
          { name: '供应商评审记录', description: '确保供应链质量可控', source: '企业提供' },
        ],
      },
    ],
  },
  {
    phase: 2,
    title: '第二阶段：成长加速与资格获取',
    description: '在基础之上，获取国家认可的科技企业身份，享受初步的政策红利。',
    badge: '成长加速',
    badgeColor: 'bg-teal-100 text-teal-800',
    certifications: [
      {
        id: 'p2c1',
        title: '科技型中小企业入库',
        subtitle: '享受研发费用加计扣除75%优惠',
        timeline: '第10-12个月',
        icon: <Star className="w-5 h-5 text-yellow-500" />,
        description: '国家级科技企业身份，是申报高新技术企业的前置步骤之一，可享受税收优惠。',
        checklist: [
          { name: '企业上一年度财务报表', description: '需包含资产负债表、利润表', source: '企业提供' },
          { name: '知识产权证书扫描件', description: '第一阶段积累的软著、专利', source: '企业提供' },
          { name: '研发人员花名册', description: '需注明学历、专业、岗位', source: '企业提供' },
          { name: '企业职工总数、社保证明', description: '证明人员规模和合规性', source: '企业提供' },
        ],
      },
      {
        id: 'p2c2',
        title: '高新技术企业培育与申报',
        subtitle: '企业所得税减免至15%',
        timeline: '第13-24个月',
        icon: <Award className="w-5 h-5 text-red-500" />,
        description: '最具含金量的企业资质之一，享受大幅税收减免和政府补贴，是企业研发实力的最佳证明。',
        checklist: [
          { name: '近三个会计年度的财务审计报告', description: '必须由合规的会计师事务所出具', source: '企业提供' },
          { name: '研发费用专项审计报告', description: '核心指标，需精准归集', source: '咨询机构协助' },
          { name: '高新技术产品（服务）收入专项审计报告', description: '核心指标，证明主营业务的技术含量', source: '咨询机构协助' },
          { name: '知识产权汇总表及证明文件', description: 'I类和II类知识产权清单', source: '企业提供' },
          { name: '研发组织管理水平证明材料汇编', description: '研发制度、产学研合作协议、成果转化证明等', source: '通用模板' },
        ],
      },
    ],
  },
  {
    phase: 3,
    title: '第三阶段：专精特新与行业引领',
    description: '向产业链关键环节迈进，成为细分市场的“隐形冠军”。',
    badge: '行业引领',
    badgeColor: 'bg-purple-100 text-purple-800',
    certifications: [
      {
        id: 'p3c1',
        title: '“专精特新”中小企业认定',
        subtitle: '政府重点扶持对象',
        timeline: '第25-36个月',
        icon: <Building className="w-5 h-5 text-purple-600" />,
        description: '“专业化、精细化、特色化、新颖化”，是制造业高质量发展的标杆，可获得融资、市场开拓等多方面支持。',
        checklist: [
          { name: '企业上年度审计报告', description: '重点关注主营业务收入占比和研发投入占比', source: '企业提供' },
          { name: '主导产品市场占有率证明', description: '可由行业协会出具或提供市场分析报告', source: '咨询机构协助' },
          { name: '与主导产品相关的专利证书', description: 'II类知识产权数量要求较高', source: '企业提供' },
          { name: 'ISO 14001/45001等体系认证', description: '证明企业管理的全面性', source: '企业提供' },
          { name: '数字化、智能化产线改造证明', description: '如ERP、MES系统上线报告，设备采购合同等', source: '企业提供' },
        ],
      },
    ],
  },
];

// --- UI COMPONENTS ---
const AccordionItem: FC<{ cert: Certification; isOpen: boolean; onToggle: () => void }> = ({ cert, isOpen, onToggle }) => {
  const handleDownload = (checklist: ChecklistItem[], title: string) => {
    const header = '序号,材料名称,材料说明,来源/备注\n';
    const csvContent = checklist.map((item, index) => 
      `${index + 1},"${item.name}","${item.description}","${item.source}"`
    ).join('\n');
    const fullCsv = header + csvContent;
    
    // In a real app, you'd use a library like 'file-saver' or create a blob URL.
    // For this self-contained component, we'll use an alert to simulate the download.
    alert(`✅ 准备下载：${title} - 材料清单\n\n${fullCsv}`);
  };

  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
          onClick={onToggle}
        >
          <div className="flex items-center space-x-4">
            {cert.icon}
            <div>
              <span className="text-base font-semibold text-gray-800">{cert.title}</span>
              <p className="text-sm text-gray-500">{cert.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1.5" />
              {cert.timeline}
            </span>
            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
      </h2>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="p-5 border-t border-gray-200 bg-gray-50">
          <p className="mb-4 text-gray-600">{cert.description}</p>
          <div className="mb-6">
            <button 
              onClick={() => handleDownload(cert.checklist, cert.title)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download className="w-4 h-4 mr-2" />
              下载材料清单模板 (CSV格式)
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase">材料名称</th>
                  <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase">说明</th>
                  <th className="px-4 py-2 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase">来源/备注</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cert.checklist.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.description}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.source === '通用模板' ? 'bg-green-100 text-green-800' : item.source === '企业提供' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                        {item.source}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificationRoadmapPage: NextPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('p1c1');

  const handleToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <main className="container px-4 py-12 mx-auto md:px-6 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              浙江中泰智能制造有限公司 - 资质申报路线图
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              一份为您量身定制的、从零到精的资质规划与申报行动指南。
            </p>
          </header>

          <div className="space-y-12">
            {roadmapData.map((phase) => (
              <section key={phase.phase}>
                <div className="relative pb-8">
                  <div className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-8 ring-slate-50">
                          <span className="text-sm font-bold text-white">{phase.phase}</span>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-xl font-semibold text-gray-800">{phase.title}</div>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${phase.badgeColor}`}>
                          {phase.badge}
                        </span>
                        <p className="text-sm text-gray-500">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-4 pl-10">
                  <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
                    {phase.certifications.map((cert) => (
                      <AccordionItem
                        key={cert.id}
                        cert={cert}
                        isOpen={openAccordion === cert.id}
                        onToggle={() => handleToggle(cert.id)}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <footer className="mt-16 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} 浙江中泰智能制造有限公司. All rights reserved.</p>
            <p className="text-sm">本路线图仅为规划建议，具体申报请以官方最新政策为准。</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default CertificationRoadmapPage;
