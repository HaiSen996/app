import React from 'react';

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Alex</h1>
              <p className="text-text-secondary text-sm">alex@example.com</p>
            </div>
          </div>
          <button className="text-white px-4 py-2 border border-border rounded-full text-sm">
            编辑资料
          </button>
        </div>
        
        <div className="flex justify-around bg-card rounded-xl p-6 mb-8">
          <div className="text-center">
            <p className="text-white text-xl font-bold">128</p>
            <p className="text-text-secondary text-sm">关注</p>
          </div>
          <div className="w-px bg-border"></div>
          <div className="text-center">
            <p className="text-white text-xl font-bold">5.2K</p>
            <p className="text-text-secondary text-sm">粉丝</p>
          </div>
          <div className="w-px bg-border"></div>
          <div className="text-center">
            <p className="text-white text-xl font-bold">24</p>
            <p className="text-text-secondary text-sm">收藏</p>
          </div>
        </div>
        
        <section className="mb-10">
          <h2 className="text-white text-xl font-semibold mb-4">快捷操作</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: '📁', name: '我的歌单', count: '8' },
              { icon: '❤️', name: '收藏', count: '24' },
              { icon: '📥', name: '下载', count: '12' },
              { icon: '🎤', name: '播客', count: '5' },
              { icon: '🎧', name: '电台', count: '10' },
              { icon: '🎬', name: 'MV', count: '3' }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="text-white text-sm mb-1">{item.name}</p>
                <p className="text-text-secondary text-xs">{item.count}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-white text-xl font-semibold mb-4">设置</h2>
          <div className="bg-card rounded-xl overflow-hidden">
            {[
              '账户设置', '隐私设置', '通知设置', '数据与缓存', '关于 GreenBeat'
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b border-border last:border-0">
                <p className="text-white text-sm">{item}</p>
                <span className="text-text-secondary">→</span>
              </div>
            ))}
          </div>
        </section>
        
        <div className="text-center">
          <button className="text-text-secondary px-6 py-2 border border-border rounded-full text-sm">
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
};
