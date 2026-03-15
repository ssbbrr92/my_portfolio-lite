import {Award, BookOpen, Briefcase, Code2, ExternalLink, Github, Linkedin, Mail, Settings,} from 'lucide-react';
import {ReactNode} from "react";
import {Tooltip} from "@mui/material";

function App() {

  const LogoWithText = ({logo, logoText, children} : {logo: string, logoText: string, children: ReactNode}) => {
    return (
        <>
          <img src={logo} alt={logoText} width={32} className={'text-blue-300 inline'} /> {children}
        </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="min-h-screen">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
          <img
              src="images/ysh_profile.jpg"
              alt="프로필 사진"
              className="w-40 h-50 rounded-full mb-8 border-4 border-blue-400/50 shadow-lg shadow-blue-500/30"
          />
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">양수호</h1>
          <p className="text-2xl text-gray-600 mb-8 font-bold">풀스택 개발자</p>
          <div className="flex gap-6">
            <a href="https://github.com/YangSooHo" className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="mailto:ysh5586@naver.com" className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/%EC%88%98%ED%98%B8-%EC%96%91-67045a35b/" className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 bg-white/80">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">소개</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                임상 데이터 관리 시스템 개발 및 메타데이터, 대용량 데이터 처리에 특화된 풀스택 개발자입니다. Spring Boot, Thymeleaf, Apache Freemarker, React, MongoDB, MS SQL Server 등의 기술을 활용하여 안정적이고 확장 가능한 솔루션을 제공합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Agile 방법론을 활용한 실시간 요구사항 대응 및 유연한 개발 프로세스에 능숙하며, CDISC ODM-XML 표준 인증 작업을 성공적으로 완료한 경험이 있습니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                임상 시험 데이터 관리, 교육 관리 시스템, 표준 업무 절차 시스템 등 다양한 의료/제약 관련 시스템 개발 경험을 보유하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Code2 className="w-12 h-12 mb-6 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Front-end</h3>
                <ul className="text-gray-600 space-y-3 text-center">
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                  <li>VueJS (Vue3)</li>
                  <li>HTML5 / CSS3</li>
                  <li>Thymeleaf / JSP</li>
                  <li>Apache Freemarker</li>
                  <li>Tailwind CSS / Bootstrap</li>
                  <li>Ant Design</li>
                  <li>Radix Vue</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Award className="w-12 h-12 mb-6 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Back-end</h3>
                <ul className="text-gray-600 space-y-3 text-center">
                  <li>Java / Spring Boot</li>
                  <li>Mybatis</li>
                  <li>MongoDB</li>
                  <li>MySQL / MariaDB</li>
                  <li>MS SQL Server</li>
                  <li>PostgreSQL</li>
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>RESTful API</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <BookOpen className="w-12 h-12 mb-6 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">DevOps</h3>
                <ul className="text-gray-600 space-y-3 text-center">
                  <li>CSP (AWS, AZURE, SCP)</li>
                  <li>Jenkins</li>
                  <li>ArgoCD</li>
                  <li>Docker</li>
                  <li>Linux / Shell Script</li>
                  <li>NGiNX</li>
                  <li>Redis</li>
                  <li>Hazelcast</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">업무 경력</h2>
            <div className="max-w-3xl mx-auto space-y-12">

              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">풀스택 개발자</h3>
                    <p className="text-blue-600 mb-4">프리랜서(삼성SDS) • 2025.06 - Ongoing</p>
                    <ul className="text-gray-600 space-y-3 list-disc list-inside">
                      <li>
                        클라우드 접속 관리 시스템
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - 고도화 개발 진행<br/>
                          - Vue3 관련 공용 컴포넌트 제작 및 Dev Center 페이지 제작<br/>
                          - User, Role 관리 페이지 및 Impersonation Login 기능 개발<br/>
                          - AWS, SCP Console Log 배치 프로세스 개발 (Hazelcast Cache)<br/>
                          - OTP 재발급 기능 개발<br/>
                          - Resource Access 기능 확대 (Azure)<br/>
                          - 데이터베이스 기반 .yml 설정 클래스 실시간 수정 작업 (Java Reflection, RefreshScope)<br/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">풀스택 개발자</h3>
                    <p className="text-blue-600 mb-4">(주)디티앤씨알오 • 2024.07 - 2024.12</p>
                    <ul className="text-gray-600 space-y-3 list-disc list-inside">
                      <li>
                        임상 데이터 관리 시스템 관리 및 유지보수
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - 관리자 콘솔(Admin Console) 및 의료 코딩 관련 사전(MedDRA, ATC Index 등) 관리<br/>
                          - 빌더 시스템(Builder) 및 전자 데이터 수집(EDC) 시스템 운영 및 유지보수<br/>
                          - 장애 대응 및 버그 수정, 시스템 업데이트 수행<br/>
                        </div>
                      </li>
                      <li>
                        개발 팀 리드 및 멘토링
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - Figma 기반 임상 데이터 관리 시스템 구조도 설계<br/>
                          - 신규 입사자 교육 및 코드 리뷰, 업무 관련 멘토링 진행<br/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">풀스택 개발자</h3>
                    <p className="text-blue-600 mb-4">(주)세이프소프트 • 2019.07 - 2024.07</p>
                    <ul className="text-gray-600 space-y-3 list-disc list-inside">
                      <li>
                        임상 데이터 관리 시스템 개발 및 표준화
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - CDISC ODM-XML 1.3.2 인증 작업 완료 (총 7개 부문 중 6개 부문)<br/>
                          - RESTful API 설계 및 개발: 시험 정보 API 제공 및 Swagger-UI 문서화<br/>
                          &nbsp;&nbsp;임상 데이터 연동 및 eCRF 자동화<br/>
                          - Builder 시스템 프론트엔드 구현 및 인터페이스 개발<br/>
                          - MongoDB를 활용한 JSON 데이터 관리 및 XML 변환 유효성 검증<br/>
                          - 버전 관리 및 메타데이터 감사 추적(Audit Trail) 구현<br/>
                          - SQL Parser를 활용한 Data Mapping 시스템 구현 및 DevExpress Report 연동<br/>
                          - 동적 Role & Privilege에 따른 Resource 접근 권한 제어 시스템 구축<br/>
                        </div>
                      </li>
                      <li>
                        교육 및 표준 업무 절차 관리 시스템 개발
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - ISO 교육 관리 시스템 및 표준 업무 절차(SOP) 시스템 개발<br/>
                          - Apache Freemarker 및 Thymeleaf를 활용한 템플릿 기반 UI 구성<br/>
                          - 전자 결제 시스템 및 교육 관리 기능 구현<br/>
                          - 교육용 퀴즈 시스템 및 데이터 변경 감지 시스템 구현<br/>
                          - 중앙대학교, 단국대학교, 대한항암요법연구회 등 대상 시스템 배포<br/>
                        </div>
                      </li>
                      <li>
                        비임상 연구 및 모니터링 시스템 개발
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - 의료기기 데이터 연동을 위한 비임상 연구실 시스템 인터페이스 개발<br/>
                          - 시험 일정 관리 및 실시간 모니터링 시스템 구축<br/>
                          - 장비 데이터 등록 및 스케줄 관리 기능 구현<br/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Settings className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">자동화시스템 개발자</h3>
                    <p className="text-blue-600 mb-4">(주)링크제니시스 • 2017.03 - 2019.05</p>
                    <ul className="text-gray-600 space-y-3 list-disc list-inside">
                      <li>
                        자동화 테스트 시스템 개발
                        <div className="ml-6 mt-1 text-sm text-gray-500">
                          - LG 자동화 모듈 테스트용 Python 기반 스크립트 개발<br/>
                          - Linux 기반 AVN 모듈 에이전트 운용<br/>
                          - QNX(Unix 계열 OS) 및 Android 기반 에이전트 쉘 프로그래밍<br/>
                          - LG ATS/Excelrunner 시스템 커스터마이징 및 전력 장비 연동 스크립트 개발<br/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">주요 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center">
                    클라우드 접속 관리 시스템
                  </h3>
                  <div className="text-gray-600 mb-4 text-sm">
                    <p className="mb-2">Spring Boot와 VueJS 및 Hazelcast Server를 활용한 클라우드 접속 관리 시스템.</p>
                    <p className="mb-2">클라우드 플랫폼 관련 Console 및 Resource 접속 제어</p>
                    <p className="mb-2">NodeJS 기반 Agent 모듈 설치를 통해 Client - Server 간 접속 지원 (VM, DB 등)</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">VueJS(Vue3)</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">PostgreSQL</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Hazelcast</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">Spring Batch</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">Mybatis</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center">
                    임상 데이터 관리 시스템

                    <Tooltip title={'Builder'}>
                      <a href="https://builder.redpine.io/login" target={"_blank"} className="ml-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                        <ExternalLink size={20} className="text-blue-600" />
                      </a>
                    </Tooltip>

                    <Tooltip title={'EDC'}>
                    <a href="https://cdms.redpine.io/login" target={"_blank"} className="ml-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                    </Tooltip>
                  </h3>
                  <div className="text-gray-600 mb-4 text-sm">
                    <p className="mb-2">Spring Boot와 React/Thymeleaf 및 Redis Server를 활용한 종합적인 임상 데이터 관리 시스템.</p>
                    <p className="mb-2">CDISC ODM-XML 표준 인증 획득으로 국제 호환성 확보</p>
                    <p className="mb-2">Builder-EDC 간 API 연동으로 데이터 입력 자동화 구현</p>
                    <p className="mb-2">버전 관리 및 감사 추적 시스템으로 데이터 무결성 보장</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Redis</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">JAXB</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">JPA/JPQL</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">Mybatis</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center">
                    ISO 교육 관리 시스템
                    <a href="https://isoms.safesoft.co.kr/"  target={"_blank"}className="ml-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </h3>
                  <div className="text-gray-600 mb-4 text-sm">
                    <p className="mb-2">Spring Boot와 Apache Freemarker를 활용한 ISO 규정 교육 관리 시스템</p>
                    <p className="mb-2">교육 관리 자동화로 ISO 규정 준수율 98% 달성</p>
                    <p className="mb-2">전자 결제 시스템 도입으로 문서 승인 과정 60% 단축</p>
                    <p className="mb-2">중앙대학교, 단국대학교 등 여러 기관에 성공적 시스템 구축</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Apache Freemarker</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">GroupDocs</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">Envers</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center">
                    전자 표준 업무 절차 시스템
                    <a href="http://esop.dtncro.co.kr" target={"_blank"} className="ml-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </h3>
                  <div className="text-gray-600 mb-4 text-sm">
                    <p className="mb-2">Spring Boot와 Apache Freemarker를 활용한 표준 업무 절차 문서 관리 시스템</p>
                    <p className="mb-2">전자 결제 기능과 SOP 문서 열람 시스템으로 문서 관리 효율화</p>
                    <p className="mb-2">모든 메뉴에 대한 내용을 data-envers 모듈을 활용하여 변경 이력 추적</p>
                    <p className="mb-2">내부 계열사 및 대한항암요법연구회 내 시스템 배포 및 유지보수</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Apache Freemarker</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">GroupDocs</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center">
                    전자 교육 관리 시스템
                    <a href="https://lms.dtncro.co.kr/" target={"_blank"} className="ml-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </h3>
                  <div className="text-gray-600 mb-4 text-sm">
                    <p className="mb-2">Spring Boot와 Thymeleaf를 활용한 교육 관리 시스템</p>
                    <p className="mb-2">교육 등록 및 수강, 수료증 발급 자동화 시스템</p>
                    <p className="mb-2">디지털 바인더 기능으로 교육 기록 및 문서 통합 관리</p>
                    <p className="mb-2">설문 조사 및 시험 기능 통합으로 교육 효과 측정 개선</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Thymeleaf</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">GroupDocs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">역량 및 강점</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">기술적 역량</h3>
                <ul className="text-gray-600 space-y-4 list-disc list-inside">
                  <li>
                    <span className="font-medium text-gray-700">대용량 데이터 처리</span>
                    <p className="ml-6 mt-1 text-sm">효율적인 데이터베이스 설계 및 쿼리 최적화를 통한 대용량 임상 데이터 처리 능력</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">풀스택 개발</span>
                    <p className="ml-6 mt-1 text-sm">백엔드부터 프론트엔드까지 전체 개발 생애주기 관리 가능</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">시스템 통합</span>
                    <p className="ml-6 mt-1 text-sm">이기종 시스템 간의 효율적인 통합 및 데이터 동기화 구현</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">임상 데이터 표준화</span>
                    <p className="ml-6 mt-1 text-sm">CDISC ODM-XML 등 국제 표준에 맞춘 임상 데이터 처리 및 인증 경험</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">소프트 스킬</h3>
                <ul className="text-gray-600 space-y-4 list-disc list-inside">
                  <li>
                    <span className="font-medium text-gray-700">리더십</span>
                    <p className="ml-6 mt-1 text-sm">개발 팀 리드 및 신규 입사자 교육, 코드 리뷰 등 팀 역량 강화 경험</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">문제 해결 능력</span>
                    <p className="ml-6 mt-1 text-sm">복잡한 기술적 문제를 체계적으로 분석하고 해결하는 능력</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">팀 협업</span>
                    <p className="ml-6 mt-1 text-sm">Agile 환경에서의 효과적인 커뮤니케이션과 협업 능력</p>
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">변화 적응력</span>
                    <p className="ml-6 mt-1 text-sm">빠르게 변화하는 요구사항과 기술 환경에 유연하게 대응하는 능력</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reference Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">기술 참조</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">개발 환경</h3>
                <ul className="text-gray-600 space-y-4">
                  <li>
                    <LogoWithText logo={'https://ko.legacy.reactjs.org/favicon.ico'} logoText={'React'}>
                      <strong className='text-lg min-w-44 inline-flex'>React</strong> | <span>포트폴리오 기반 언어로 사용</span>
                    </LogoWithText>
                  </li>
                  <li>
                    <LogoWithText logo={'https://lucide.dev/logo.light.svg'} logoText={'Lucide-react'}>
                      <strong className='text-lg min-w-44 inline-flex'>lucide-react</strong> | <span>텍스트 아이콘 사용</span>
                    </LogoWithText>
                  </li>
                  <li>
                    <LogoWithText logo={'https://ko.vite.dev/logo.svg'} logoText={'Vite'}>
                      <strong className='text-lg min-w-44 inline-flex'>Vite</strong> | <span>포트폴리오 프로젝트를 빌드하기 위한 Tool</span>
                    </LogoWithText>
                  </li>
                  <li>
                    <LogoWithText logo={'https://bolt.new/static/favicon.svg'} logoText={'Bolt New'}>
                      <strong className='text-lg min-w-44 inline-flex'>Bolt New</strong> | <span>포트폴리오 초안 작업 진행</span>
                    </LogoWithText>
                  </li>
                  <li>
                    <LogoWithText logo={'https://tailwindcss.com/favicon.ico'} logoText={'Tailwind CSS'}>
                      <strong className='text-lg min-w-44 inline-flex'>Tailwind CSS</strong> | <span>레이아웃 디자인에 사용된 CSS</span>
                    </LogoWithText>
                  </li>
                  <li>
                    <LogoWithText logo={'https://github.githubassets.com/favicons/favicon.svg'} logoText={'gh-pages'}>
                      <strong className='text-lg min-w-44 inline-flex'>gh-pages</strong> | <span>깃허브 페이지에 빌드하기 위한 라이브러리</span>
                    </LogoWithText>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-blue-50">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p className="text-lg">© 2025 양수호. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;