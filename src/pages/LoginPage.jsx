return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex items-center justify-center px-4 py-8">
    <div className="w-full max-w-md">
      <div className="bg-white/90 backdrop-blur border border-slate-200 rounded-3xl shadow-xl px-8 py-10">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="The Glorious Church Logo"
            className="w-32 mx-auto mb-5"
          />
          
          <h1 className="text-2xl font-bold text-slate-800">
            The Glorious Church
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Sign in to continue to the management system
          </p>
        </div>

        <AlertBanner message={error} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="name@thegloriouschurch.org"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <LogIn className="w-4 h-4" />
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  </div>
);
