// 页面逻辑：日常修改个人信息请去 content.js，不需要编辑此文件。
(() => {
  const data = window.SITE_CONTENT;
  if (!data) return;
  const $ = id => document.getElementById(id);
  const labels = {
    en: { about:['Introduction','About Me'], research:['Areas of Interest','Research Interests'], education:['Background','Education'], projects:['Selected Work','Projects'], publications:['Research Output','Publications'], contact:['Get in Touch','Contact'] },
    zh: { about:['个人介绍','关于我'], research:['研究兴趣','研究方向'], education:['学术背景','教育经历'], projects:['部分项目','项目经历'], publications:['科研成果','论文发表'], contact:['欢迎交流','联系方式'] }
  };
  const nav = { en:{about:'About',research:'Research',education:'Education',projects:'Projects',contact:'Contact'}, zh:{about:'关于我',research:'研究方向',education:'教育经历',projects:'项目',contact:'联系'} };
  const tr = (value, lang) => (value && typeof value === 'object' && !Array.isArray(value)) ? (value[lang] || value.en || '') : (value || '');
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value != null) node.textContent = String(value);
    return node;
  };
  function safeUrl(value) {
    try { const u = new URL(value, location.href); return ['https:', 'http:', 'mailto:'].includes(u.protocol) ? u.href : '#'; }
    catch { return '#'; }
  }
  function setLink(id, url, text) { const a = $(id); a.href = safeUrl(url); a.textContent = text; }
  function render(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = `${data.name} | Academic Homepage`;
    $('brand').textContent = data.name;
    $('name').textContent = lang === 'zh' && data.nameZh ? data.nameZh : data.name;
    $('position').textContent = tr(data.position, lang);
    $('university').textContent = tr(data.university, lang);
    $('portrait').replaceChildren();
    if (data.avatar) { const img = el('img'); img.src = data.avatar; img.alt = data.name; $('portrait').append(img); }
    else $('portrait').textContent = data.initials || 'XZ';
    setLink('profileEmail', `mailto:${data.email}`, data.email);
    setLink('contactEmail', `mailto:${data.email}`, data.email);
    setLink('profileGithub', data.github, 'GitHub ↗');
    setLink('contactGithub', data.github, 'GitHub');
    for (const a of document.querySelectorAll('[data-nav]')) a.textContent = nav[lang][a.dataset.nav];
    for (const a of document.querySelectorAll('[data-title]')) a.textContent = labels[lang][a.dataset.title][1];
    for (const a of document.querySelectorAll('[data-eyebrow]')) a.textContent = labels[lang][a.dataset.eyebrow][0];
    $('langBtn').textContent = lang === 'en' ? '中文' : 'English';
    $('langBtn').setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English');
    $('aboutContent').replaceChildren(...(data.about?.[lang] || []).map(t => el('p', '', t)));
    $('researchContent').replaceChildren(...(data.research || []).map((r,i) => {
      const card = el('article','interest');
      card.append(el('span','num',String(i+1).padStart(2,'0')+' / '+(r.area||'Research')), el('h3','',tr(r.title,lang)),el('p','',tr(r.description,lang)));
      return card;
    }));
    $('educationContent').replaceChildren(...(data.education || []).map(item => {
      const card=el('div','education'); card.append(el('strong','',tr(item.school,lang)),el('p','muted',tr(item.degree,lang)));
      if (item.years) card.append(el('p','muted',item.years));
      return card;
    }));
    $('projectsContent').replaceChildren(...(data.projects || []).map(item => {
      const card=el('article','project'), title=el('h3'), a=el('a','',item.name+' ↗'); a.href=safeUrl(item.url); a.target='_blank'; a.rel='noopener noreferrer'; title.append(a);
      card.append(title,el('p','',tr(item.description,lang)));
      const tags=el('div','tags'); for(const tag of item.tags||[]) tags.append(el('span','tag',tag)); card.append(tags); return card;
    }));
    const papers=data.publications||[]; $('publications').hidden=papers.length===0;
    $('publicationsContent').replaceChildren(...papers.map(item=>{
      const card=el('article','publication'); const h=el('h3');
      if(item.url){const a=el('a','',item.title); a.href=safeUrl(item.url); a.target='_blank'; a.rel='noopener noreferrer';h.append(a);}else h.textContent=item.title;
      card.append(h,el('p','muted',[item.authors,item.venue,item.year].filter(Boolean).join(' · ')));return card;
    }));
    $('contactContent').textContent=tr(data.contactText,lang);
    $('footer').textContent=`© ${new Date().getFullYear()} ${data.name} · GitHub Pages`;
  }
  let lang='en';
  $('langBtn').addEventListener('click',()=>{ lang=lang==='en'?'zh':'en'; render(lang); });
  render(lang);
})();
